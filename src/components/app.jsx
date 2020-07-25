import ToDo from './ToDo';

export default {
    mounted() {},

    data() {
        return {
            arrTodos: [
                { id: 1, desc: 'wake up' },
                { id: 2, desc: 'smoke weed' },
                // { id: 3, desc: 'make a coffe' },
                // { id: 4, desc: 'go to work' },
                // { id: 5, desc: 'eat eat eat' },
                // { id: 6, desc: 'return' },
            ],
        };
    },

    methods: {
        handleSubmitTodo(data) {
            if (!data) return;
            this.arrTodos.push(
                Object.assign({}, { id: this.arrTodos.length + 1, desc: data })
            );
        },
    },

    render() {
        return (
            <div class="tile is-ancestor">
                <div class="tile is-parent is-4">
                    <ToDo
                        list={this.arrTodos}
                        on-changes={this.handleSubmitTodo}
                    />
                </div>
                <div class="tile is-parent is-4">
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
                </div>
                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <p class="title has-text-black">Done</p>
                        <p class="subtitle has-text-black">With some content</p>
                        <div class="content">
                            <ul style="list-style-type: none; margin: 0; padding: 0;">
                                <li> task 1</li>
                                <li> task 2</li>
                                <li> task 3</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        );
    },
};
