import Person from '../app'

describe('Name of the group', () => {
    test('should name person', async () => {
        const p1 = new Person('rodney')
        expect(p1.name).toBe('rodney');
    });
});
