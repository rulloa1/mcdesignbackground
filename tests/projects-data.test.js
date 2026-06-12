const projectsData = require('../projects-data');

const VALID_CATEGORIES = [
    'owners-representation',
    'residential-construction',
    'design-build',
    'civil',
    'hospitality',
];

const REQUIRED_FIELDS = ['id', 'title', 'subtitle', 'category', 'location', 'role', 'coverImage', 'images'];

describe('projectsData — shape', () => {
    test('exports a non-empty array', () => {
        expect(Array.isArray(projectsData)).toBe(true);
        expect(projectsData.length).toBeGreaterThan(0);
    });

    test('contains exactly 21 projects', () => {
        expect(projectsData).toHaveLength(21);
    });

    test('all project IDs are unique', () => {
        const ids = projectsData.map(p => p.id);
        expect(new Set(ids).size).toBe(projectsData.length);
    });

    test('all IDs are non-empty strings', () => {
        projectsData.forEach(p => {
            expect(typeof p.id).toBe('string');
            expect(p.id.length).toBeGreaterThan(0);
        });
    });

    test('featured field is boolean where present', () => {
        projectsData.forEach(p => {
            if ('featured' in p) {
                expect(typeof p.featured).toBe('boolean');
            }
        });
    });
});

describe('projectsData — per-project required fields', () => {
    test.each(projectsData)('$id has all required fields', (project) => {
        REQUIRED_FIELDS.forEach(field => {
            expect(project).toHaveProperty(field);
            // Field value must be truthy (non-empty string, non-empty array, etc.)
            expect(project[field]).toBeTruthy();
        });
    });
});

describe('projectsData — per-project category', () => {
    test.each(projectsData)('$id has a valid category', (project) => {
        expect(VALID_CATEGORIES).toContain(project.category);
    });
});

describe('projectsData — per-project images', () => {
    test.each(projectsData)('$id has a non-empty images array', (project) => {
        expect(Array.isArray(project.images)).toBe(true);
        expect(project.images.length).toBeGreaterThan(0);
    });

    test.each(projectsData)('$id image paths are non-empty strings', (project) => {
        project.images.forEach(src => {
            expect(typeof src).toBe('string');
            expect(src.length).toBeGreaterThan(0);
        });
    });

    test.each(projectsData)('$id coverImage is a non-empty string', (project) => {
        expect(typeof project.coverImage).toBe('string');
        expect(project.coverImage.length).toBeGreaterThan(0);
    });
});
