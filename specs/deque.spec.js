const Deque = require('../src/deque');

describe('deque', function() {

    describe('constructor', function() {
        it('should set the this.length of the deque to 0', function() {
            let deque = new Deque();
            expect(deque.length).to.be.equal(0);
        });

        it('should set this.head to null', function() {
            let deque = new Deque();
            expect(deque.head).to.be.equal(null);
        });

        it('should set this.tail to null', function() {
            let deque = new Deque();
            expect(deque.tail).to.be.equal(null);
        });
    });

    describe('push', function() {
        it ('should add the node to this.head with passed left-parameter to "true"', function() {
            let deque = new Deque();
            const node = {
                value: 5,
                next: null
            }
            const currentHead = deque.head;
            deque.push(true, node);

            expect(deque.head.next).to.be.equal(currentHead);
        });


        it ('should update links between nodes', function() {
            let deque = new Deque();
            const node = {
                value: 5
            }
            deque.push(true, node);

            expect(deque.head).to.be.equal(node);
        });

        it ('should add multiple node to this.head with passed left-parameter to "true"', function() {
            let deque = new Deque();
            const nodes = [
                {value: 5},
                {value: 3},
                {value: 7},
            ]

            deque.push(true, ...nodes);

            expect(deque.head).to.be.equal(nodes[2]);
        });

        it ('should add the node to this.head with passed left parameter to "false"', function() {
            let deque = new Deque();
            const node = {
                value: 5
            }

            deque.push(true, node);

            expect(deque.tail).to.be.equal(node);
        });

        it ('should add the multiple nodes to this.head with passed left parameter to "false"', function() {
            let deque = new Deque();
            const nodes = [
                {value: 5},
                {value: 3},
                {value: 7},
            ]

            deque.push(true, ...nodes);

            expect(deque.tail).to.be.equal(nodes[2]);
        });

    });

    describe('pop', function() {
        it('should return an array', function() {
            let deque = new Deque();
            const result = deque.pop(1, true);

            expect(result).to.be.an('array');
        });

        it('should return an array with passed amount of items amount of items', function() {
            let deque = new Deque();
            const result = deque.pop(5, true);

            expect(result).to.have.lengthOf(5);
        });

    });

    describe('top', function() {
        it('should return this.head element with passed parameter "true"', function() {
            let deque = new Deque();
            const result = deque.top(true);

            expect(result).to.be.equal(deque.head);
        });

        it('should return this.tail element with passed parameter "false', function() {
            let deque = new Deque();
            const result = deque.top(false);

            expect(result).to.have.equal(deque.tail);
        });

    });

    // describe('merge', function() {
    //     it('should return this.head element with passed parameter "true"', function() {
    //         let firstDeque = new Deque();
    //         let secondDeque = new Deque();
    //         const result = firstDeque.merge.secondDeque(true);
    //
    //         expect(result).to.be.equal();
    //     });
    //
    // });
});
