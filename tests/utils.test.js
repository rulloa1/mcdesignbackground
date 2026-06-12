const {
    calculateStats,
    navigateLightbox,
    getImageLoadingAttr,
    getLightboxCounter,
    findProjectById,
    getProjectImages,
    buildProjectMeta,
    filterProjects,
    formatCounterValue,
} = require('../utils');

// ── calculateStats ────────────────────────────────────────────────────────────

describe('calculateStats', () => {
    test('returns correct values at slider default (20 years)', () => {
        const { projects, sqft, capital } = calculateStats(20);
        expect(projects).toBe(45);   // floor(20 * 2.25)
        expect(sqft).toBe(2.5);      // (20 * 0.125).toFixed(1)
        expect(capital).toBe(850);   // floor(20 * 42.5)
    });

    test('returns zeros at 0 years', () => {
        const { projects, sqft, capital } = calculateStats(0);
        expect(projects).toBe(0);
        expect(sqft).toBe(0.0);
        expect(capital).toBe(0);
    });

    test('floors fractional project counts', () => {
        // 1 year: floor(2.25) = 2
        expect(calculateStats(1).projects).toBe(2);
    });

    test('sqft rounds to one decimal place', () => {
        // 4 years: (0.5).toFixed(1) = "0.5"  →  0.5
        expect(calculateStats(4).sqft).toBe(0.5);
        // 8 years: (1.0).toFixed(1) = "1.0"  →  1.0
        expect(calculateStats(8).sqft).toBe(1.0);
    });

    test('returns correct values at slider max (25 years)', () => {
        const { projects, sqft, capital } = calculateStats(25);
        expect(projects).toBe(56);    // floor(56.25)
        expect(sqft).toBe(3.1);       // (3.125).toFixed(1) → "3.1"
        expect(capital).toBe(1062);   // floor(1062.5)
    });

    test('floors fractional capital values', () => {
        // 1 year: floor(42.5) = 42
        expect(calculateStats(1).capital).toBe(42);
    });
});

// ── navigateLightbox ─────────────────────────────────────────────────────────

describe('navigateLightbox', () => {
    test('advances to next image', () => {
        expect(navigateLightbox(0, 1, 10)).toBe(1);
        expect(navigateLightbox(5, 1, 10)).toBe(6);
    });

    test('wraps forward from last image to first', () => {
        expect(navigateLightbox(9, 1, 10)).toBe(0);
    });

    test('goes to previous image', () => {
        expect(navigateLightbox(5, -1, 10)).toBe(4);
    });

    test('wraps backward from first image to last', () => {
        expect(navigateLightbox(0, -1, 10)).toBe(9);
    });

    test('handles large gallery (miami-beach: 47 images)', () => {
        expect(navigateLightbox(46, 1, 47)).toBe(0);   // last → first
        expect(navigateLightbox(0, -1, 47)).toBe(46);  // first → last
    });

    test('delta of 0 returns same index', () => {
        expect(navigateLightbox(3, 0, 47)).toBe(3);
    });
});

// ── getImageLoadingAttr ───────────────────────────────────────────────────────

describe('getImageLoadingAttr', () => {
    test('first six indices load eagerly (0–5)', () => {
        [0, 1, 2, 3, 4, 5].forEach(i => {
            expect(getImageLoadingAttr(i)).toBe('eager');
        });
    });

    test('index 6 and beyond load lazily', () => {
        [6, 7, 10, 46].forEach(i => {
            expect(getImageLoadingAttr(i)).toBe('lazy');
        });
    });
});

// ── getLightboxCounter ────────────────────────────────────────────────────────

describe('getLightboxCounter', () => {
    test('formats counter as "currentIndex+1 / total"', () => {
        expect(getLightboxCounter(0, 47)).toBe('1 / 47');
        expect(getLightboxCounter(46, 47)).toBe('47 / 47');
        expect(getLightboxCounter(2, 10)).toBe('3 / 10');
    });

    test('single-image gallery shows "1 / 1"', () => {
        expect(getLightboxCounter(0, 1)).toBe('1 / 1');
    });
});

// ── findProjectById ───────────────────────────────────────────────────────────

describe('findProjectById', () => {
    const projects = [
        { id: 'miami-beach', title: 'S. Florida High Rise Luxe Condo' },
        { id: 'alpine-ranch', title: 'High Alpine Mtn. Ranch Luxe Retreat' },
    ];

    test('returns the matching project', () => {
        expect(findProjectById(projects, 'miami-beach')).toEqual(projects[0]);
    });

    test('returns null for an unknown id', () => {
        expect(findProjectById(projects, 'nonexistent')).toBeNull();
    });

    test('returns null for an empty string id', () => {
        expect(findProjectById(projects, '')).toBeNull();
    });

    test('returns null for null id', () => {
        expect(findProjectById(projects, null)).toBeNull();
    });

    test('returns null for undefined id', () => {
        expect(findProjectById(projects, undefined)).toBeNull();
    });
});

// ── getProjectImages ──────────────────────────────────────────────────────────

describe('getProjectImages', () => {
    test('returns the images array when populated', () => {
        const project = { images: ['a.webp', 'b.webp'], coverImage: 'cover.webp' };
        expect(getProjectImages(project)).toEqual(['a.webp', 'b.webp']);
    });

    test('falls back to coverImage when images is absent', () => {
        const project = { coverImage: 'cover.webp' };
        expect(getProjectImages(project)).toEqual(['cover.webp']);
    });

    test('falls back to coverImage when images array is empty', () => {
        const project = { images: [], coverImage: 'cover.webp' };
        expect(getProjectImages(project)).toEqual(['cover.webp']);
    });
});

// ── buildProjectMeta ──────────────────────────────────────────────────────────

describe('buildProjectMeta', () => {
    test('includes location, specs, and role when all present', () => {
        const project = { location: 'Montana', specs: '2,300 sqft', role: 'Owner Rep' };
        const meta = buildProjectMeta(project);
        expect(meta).toHaveLength(3);
        expect(meta[0]).toEqual({ label: 'Location', value: 'Montana' });
        expect(meta[1]).toEqual({ label: 'Specs',    value: '2,300 sqft' });
        expect(meta[2]).toEqual({ label: 'Role',     value: 'Owner Rep' });
    });

    test('omits fields with falsy values', () => {
        const project = { location: 'Montana', specs: undefined, role: '' };
        const meta = buildProjectMeta(project);
        expect(meta).toHaveLength(1);
        expect(meta[0].label).toBe('Location');
    });

    test('returns empty array when no fields have values', () => {
        expect(buildProjectMeta({})).toHaveLength(0);
    });

    test('preserves order: Location → Specs → Role', () => {
        const project = { location: 'Bahamas', specs: 'Resort', role: 'PM' };
        const labels = buildProjectMeta(project).map(m => m.label);
        expect(labels).toEqual(['Location', 'Specs', 'Role']);
    });
});

// ── filterProjects ────────────────────────────────────────────────────────────

describe('filterProjects', () => {
    const projects = [
        { id: 'a', category: 'civil' },
        { id: 'b', category: 'civil' },
        { id: 'c', category: 'residential-construction' },
        { id: 'd', category: 'hospitality' },
    ];

    test('returns all projects when category is "all"', () => {
        expect(filterProjects(projects, 'all')).toHaveLength(4);
    });

    test('filters to matching category only', () => {
        const result = filterProjects(projects, 'civil');
        expect(result).toHaveLength(2);
        expect(result.every(p => p.category === 'civil')).toBe(true);
    });

    test('returns empty array when no projects match', () => {
        expect(filterProjects(projects, 'design-build')).toHaveLength(0);
    });

    test('does not mutate the source array', () => {
        filterProjects(projects, 'civil');
        expect(projects).toHaveLength(4);
    });

    test('single-match filter returns exactly one item', () => {
        const result = filterProjects(projects, 'hospitality');
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe('d');
    });
});

// ── formatCounterValue ────────────────────────────────────────────────────────

describe('formatCounterValue', () => {
    test('returns a string', () => {
        expect(typeof formatCounterValue(1000)).toBe('string');
    });

    test('rounds floating-point input before formatting', () => {
        // 189000.7 → rounds to 189001; strip locale separators to verify digits
        expect(formatCounterValue(189000.7).replace(/\D/g, '')).toBe('189001');
    });

    test('handles zero', () => {
        expect(formatCounterValue(0)).toBe('0');
    });

    test('digits are preserved after stripping non-numeric characters', () => {
        // 4200 → "4,200" or "4.200" depending on locale; digits must be "4200"
        expect(formatCounterValue(4200).replace(/\D/g, '')).toBe('4200');
    });
});
