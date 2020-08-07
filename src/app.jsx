import Block from './components/block';

export default {
    data() {
        return {
            initTasks: [
                { id: 1, desc: 'wake up', list: 1 },
                { id: 2, desc: 'smoke weed', list: 1 },
                { id: 3, desc: 'make a coffe', list: 2 },
                { id: 4, desc: 'go to work', list: 1 },
                // { id: 5, desc: 'eat eat eat', list: 1 },
                // { id: 6, desc: 'return', list: 1 },
            ],
        };
    },

    computed: {
        listTodo() {
            return this.initTasks.filter((item) => item.list === 1);
        },
        listDoing() {
            return this.initTasks.filter((item) => item.list === 2);
        },
        listDone() {
            return this.initTasks.filter((item) => item.list === 3);
        },
    },

    methods: {
        dragOver(event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        },

        onDrop(event) {
            let id = parseInt(event.dataTransfer.getData('itemID'));

            let selectedItem = this.listTodo.find((item) => item.id === id);
            // let index = this.listTodo.map((item) => item.id).indexOf(id);
            console.log(selectedItem);
            if (selectedItem !== -1) {
                this.$nextTick(() => {
                    this.listTodo.splice(selectedItem, 1);
                    this.listDoing.push(
                        Object.assign({}, selectedItem, (selectedItem.list = 2))
                    );
                });
            }
            console.log(this.listTodo);
            console.log(this.initTasks);
        },
    },

    render() {
        return (
            <div class="tile is-ancestor">
                <div class="tile is-parent is-4">
                    <Block
                        title="To do"
                        subTitle="list of tasks to do"
                        isTodo={true}
                        list={this.listTodo}
                    />
                </div>
                <div class="tile is-parent is-4">
                    <Block
                        title="Doing"
                        subTitle="list of tasks doing"
                        labelTooltip="Drag task to do here"
                        list={this.listDoing}
                    />
                </div>
                <div class="tile is-parent is-4">
                    <Block
                        title="Done"
                        subTitle="list of tasks done"
                        labelTooltip="Drag task doing here"
                    />
                </div>
            </div>
        );
    },
};
