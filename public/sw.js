/**
 * @file sw.js
 * @project BrainVION Tech Community Platform - Lean Architecture Update
 * @copyright (c) 2026 BrainVION & Dial Chowdhury Emon (@dialc-cmd)
 * @license Proprietary - All Rights Reserved.
 */

// 1. Context: Lightweight service worker for PWA offline capability and precaching of critical routes.
// 2. Algorithm/Logic: Precaches the core navigation shell on install. Uses a stale-while-revalidate strategy for runtime fetches with an offline fallback for navigation requests.
// 3. Junior Engineer Guidance: When adding a new page route, add it to urlsToCache below. Never cache API routes or dynamic data endpoints here.

const CACHE_NAME = 'brainvion-cache-v2';
const OFFLINE_URL = '/learning';

const urlsToCache = [
    '/',
    '/community',
    '/services',
    '/learning',
    '/contact',
    '/login',
    '/signup',
    '/store',
    '/manifest.json',
    '/logo/logo.png',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    // Only intercept GET requests
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached response if found
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Otherwise fetch from network
                return fetch(event.request).then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        // Cache the new response for future
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                }).catch(() => {
                    // If network fails (offline) and not in cache, try offline fallback
                    if (event.request.mode === 'navigate') {
                        return caches.match(OFFLINE_URL);
                    }
                    return new Response('Network error happened', {
                        status: 408,
                        headers: { 'Content-Type': 'text/plain' },
                    });
                });
            })
    );
});
