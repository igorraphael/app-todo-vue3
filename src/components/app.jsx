import ToDo from './ToDo';
import Doing from './ToDo';

export default {
    mounted() {},

    data() {
        return {
            arrTodos: [
                { id: 1, desc: 'wake up', list: 1 },
                { id: 2, desc: 'smoke weed', list: 1 },
                { id: 3, desc: 'make a coffe', list: 2 },
                // { id: 4, desc: 'go to work' },
                // { id: 5, desc: 'eat eat eat' },
                // { id: 6, desc: 'return' },
            ],
        };
    },

    computed: {
        listOne() {
            return this.arrTodos.filter((item) => item.list === 1);
        },
        listTwo() {
            return this.arrTodos.filter((item) => item.list === 2);
        },
    },

    methods: {
        handleSubmitTodo(data) {
            if (!data) return;
            this.arrTodos.push(
                Object.assign({}, { id: this.arrTodos.length + 1, desc: data })
            );
        },

        handleDrag(data) {
            console.log(data);
        },

        dragOver(event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        },

        onDrop(event) {
            let id = parseInt(event.dataTransfer.getData('itemID'));

            let selectedItem = this.listOne.find((item) => item.id === id);
            // let index = this.listOne.map((item) => item.id).indexOf(id);
            console.log(selectedItem);
            if (selectedItem !== -1) {
                this.$nextTick(() => {
                    this.listOne.splice(selectedItem, 1);
                    this.listTwo.push(
                        Object.assign({}, selectedItem, (selectedItem.list = 2))
                    );
                });
            }
            console.log(this.listOne);
            console.log(this.arrTodos);
        },
    },

    render() {
        return (
            <div class="tile is-ancestor">
                <div class="tile is-parent is-4">
                    <ToDo on-changes={this.handleSubmitTodo} />
                </div>
                {/* <div
                    class="tile is-parent is-4"
                    onDragover={(e) => this.dragOver(e)}
                    onDrop={(e) => this.onDrop(e)}
                >
                    <article class="tile is-child box">
                        <p class="title has-text-black">Doing</p>
                        <p class="subtitle has-text-black">With some content</p>
                        <div class="content">
                            <ul style="list-style-type: none; margin: 0; padding: 0;">
                                <li> task 1</li>
                                <li> task 2</li>
                                <li> task 3</li>
                            </ul>
                        </div>
                    </article>
                </div> */}
                <div
                    class="tile is-parent is-4"
                    onDragover={(e) => this.dragOver(e)}
                    onDrop={(e) => this.onDrop(e)}
                >
                    <Doing key="doing" list={this.listTwo} />
                    {/* <article class="tile is-child box">
                        <p class="title has-text-black">Done</p>
                        <p class="subtitle has-text-black">With some content</p>
                        <div class="content">
                            <ul style="list-style-type: none; margin: 0; padding: 0;">
                                <li> task 1</li>
                                <li> task 2</li>
                                <li> task 3</li>
                            </ul>
                        </div>
                    </article> */}
                </div>
            </div>
        );
    },
};
