export default {
    mounted() {},

    data() {
        return {
            todos: [
                { id: 1, desc: 'wake up' },
                { id: 2, desc: 'smoke weed' },
                { id: 3, desc: 'make a coffe' },
                { id: 4, desc: 'go to work' },
                { id: 5, desc: 'eat eat eat' },
                { id: 6, desc: 'return' },
            ],
        };
    },

    methods: {},

    render() {
        return (
            <div class="tile is-ancestor">
                <div class="tile is-parent is-4">
                    <article class="tile is-child box ">
                        <p class="title has-text-black">To do</p>
                        <p class="subtitle has-text-black">
                            list of tasks to do
                        </p>

                        <div class="content">
                            <ul style="list-style-type: none; margin: 0;">
                                {this.todos.map((todo, index) => {
                                    return (
                                        <li
                                            key={index}
                                            class="box"
                                            style="padding: 0.7rem;"
                                        >
                                            <div class="content">
                                                <div class="level has-text-justified">
                                                    <div class="level-item">
                                                        <b-icon
                                                            class="has-text-link"
                                                            icon="thumbtack"
                                                            size="is-small"
                                                        ></b-icon>
                                                    </div>
                                                    <div class="level-item">
                                                        <span class="title is-6 has-text-primary">
                                                            {todo.desc}
                                                        </span>
                                                    </div>
                                                    <div class="level-item">
                                                        <b-icon
                                                            style="margin: 0 6px;"
                                                            type="is-info"
                                                            icon="edit"
                                                            size="is-small"
                                                        />
                                                        <b-icon
                                                            // style="margin: 0 5px;"
                                                            type="is-danger"
                                                            icon="ban"
                                                            size="is-small"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </article>
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
