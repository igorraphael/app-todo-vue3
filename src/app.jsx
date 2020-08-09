import Block from './components/block';

export default {
    data() {
        return {
            initTasks: [
                { id: 1, desc: 'wake up', list: 1 },
                { id: 2, desc: 'smoke weed', list: 1 },
                { id: 3, desc: 'make a coffe', list: 1 },
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
        onDropTask(data) {
            if (!data) return;

            if (typeof data !== 'object')
                throw new Error(
                    'Error transfer data. expected string 1/1 (id/list)!'
                );

            let findTask = this.initTasks.find((item) => item.id === data.id);
            if (findTask !== -1) {
                console.log(findTask);
                findTask.list = data.currentBlock;
            }
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
                        keyBlock={1}
                    />
                </div>
                <div class="tile is-parent is-4">
                    <Block
                        title="Doing"
                        subTitle="list of tasks doing"
                        labelTooltip="Drag task to do here"
                        list={this.listDoing}
                        keyBlock={2}
                        onDropItem={(data) => this.onDropTask(data)}
                    />
                </div>
                <div class="tile is-parent is-4">
                    <Block
                        title="Done"
                        subTitle="list of tasks done"
                        labelTooltip="Drag task doing here"
                        keyBlock={3}
                    />
                </div>
            </div>
        );
    },
};
