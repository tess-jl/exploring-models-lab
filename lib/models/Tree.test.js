const Tree = require('./Tree.js');

describe('Tree Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const tree = new Tree({
        leaves: 300,
        roots: 300,
        branches: 3, 
        trunk: 'trunk with bark'
      });
      const { errors } = tree.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('leaves', () => {
    it('is required', () => {
      const tree = new Tree({
        name: 'maple',
        roots: 300,
        branches: 3, 
        trunk: 'trunk with bark'
      });

      const { errors } = tree.validateSync();
      expect(errors.leaves.message).toEqual('Path `leaves` is required.');
    });

    it('has more than 1 leaf', () => {
      const tree = new Tree({
        name: 'maple',
        leaves: 0,
        roots: 300,
        branches: 3, 
        trunk: 'trunk with bark'
      });

      const { errors } = tree.validateSync();
      expect(errors.leaves.message).toEqual('Path `leaves` (0) is less than minimum allowed value (1).');
    });
  });

  describe('roots', () => {
    it('is required', () => {
      const tree = new Tree({
        name: 'maple',
        leaves: 0,
        branches: 3, 
        trunk: 'trunk with bark'
      });

      const { errors } = tree.validateSync();
      expect(errors.roots.message).toEqual('Path `roots` is required.');
    });

    it('has more than 1 root', () => {
      const tree = new Tree({
        name: 'maple',
        leaves: 300,
        roots: 0,
        branches: 3, 
        trunk: 'trunk with bark'
      });

      const { errors } = tree.validateSync();
      expect(errors.roots.message).toEqual('Path `roots` (0) is less than minimum allowed value (1).');
    });
  });

  describe('branches', () => {
    it('is required', () => {
      const tree = new Tree({
        name: 'maple',
        leaves: 300,
        roots: 300,
        trunk: 'trunk with bark'
      });

      const { errors } = tree.validateSync();
      expect(errors.branches.message).toEqual('Path `branches` is required.');
    });
  });

  describe('trunk', () => {
    it('is required', () => {
      const tree = new Tree({
        name: 'maple',
        leaves: 300,
        roots: 300,
        branches: 3,
      });

      const { errors } = tree.validateSync();
      expect(errors.trunk.message).toEqual('Path `trunk` is required.');
    });
  });
});
