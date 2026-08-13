// Pure utility functions extracted from inline HTML scripts.
// Each function mirrors logic in the corresponding page; keeping them here
// makes them unit-testable without a browser.

// ── index.html: stats calculator (experience slider) ────────────────────────

function calculateStats(years) {
    return {
        projects: Math.floor(years * 2.25),
        sqft: parseFloat((years * 0.125).toFixed(1)),
        capital: Math.floor(years * 42.5)
    };
}

// ── project-detail.html: lightbox navigation ────────────────────────────────

// Advance or retreat the lightbox image index, wrapping at both ends.
function navigateLightbox(currentIndex, delta, totalImages) {
    return (currentIndex + delta + totalImages) % totalImages;
}

// ── portfolio.html / project-detail.html: image loading strategy ─────────────

// First 6 images load eagerly (above-the-fold); the rest are deferred.
function getImageLoadingAttr(index) {
    return index < 6 ? 'eager' : 'lazy';
}

// ── project-detail.html: lightbox counter label ──────────────────────────────

function getLightboxCounter(currentIndex, totalImages) {
    return `${currentIndex + 1} / ${totalImages}`;
}

// ── project-detail.html: project lookup ─────────────────────────────────────

function findProjectById(projects, id) {
    if (!id) return null;
    return projects.find(p => p.id === id) ?? null;
}

// ── project-detail.html: gallery images with cover fallback ─────────────────

function getProjectImages(project) {
    return project.images && project.images.length > 0
        ? project.images
        : [project.coverImage];
}

// ── project-detail.html: meta data rows (omits absent fields) ────────────────

function buildProjectMeta(project) {
    return [
        { label: 'Location', value: project.location },
        { label: 'Specs',    value: project.specs },
        { label: 'Role',     value: project.role },
    ].filter(m => m.value);
}

// ── portfolio.html: category filter ─────────────────────────────────────────

function filterProjects(projects, category) {
    if (category === 'all') return projects;
    return projects.filter(p => p.category === category);
}

// ── index.html: GSAP counter on-update formatter ─────────────────────────────

function formatCounterValue(value) {
    return Number(Math.round(value)).toLocaleString();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateStats,
        navigateLightbox,
        getImageLoadingAttr,
        getLightboxCounter,
        findProjectById,
        getProjectImages,
        buildProjectMeta,
        filterProjects,
        formatCounterValue
    };
}
