export default {
    props: {
        list: { type: Array, default: null },
    },

    mounted() {
        console.log(this.list);
    },

    data() {
        return {
            modalVisible: undefined,
            todos: this.list,
        };
    },

    methods: {
        handleModal() {
            this.modalVisible = this.modalVisible ? '' : 'is-active';
        },
    },

    render() {
        return (
            <article class="tile is-child box ">
                <p class="title has-text-black">To do</p>
                <div class="level">
                    <div class="level-left">
                        <p class="subtitle has-text-black">
                            list of tasks to do
                        </p>
                    </div>
                    <div class="level-right">
                        <b-button
                            icon-left="plus-circle"
                            type="is-success"
                            onClick={() => this.handleModal()}
                        >
                            Add
                        </b-button>
                    </div>
                </div>
                <div class={`modal ${this.modalVisible}`}>
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Modal title</p>
                            <button
                                class="delete"
                                aria-label="close"
                                onClick={() => this.handleModal()}
                            ></button>
                        </header>
                        <section class="modal-card-body">
                            <b-field label="Rounded">
                                <b-input placeholder="No label"></b-input>
                            </b-field>
                        </section>
                        <footer class="modal-card-foot">
                            <button class="button is-success">
                                Save changes
                            </button>
                            <button class="button">Cancel</button>
                        </footer>
                    </div>
                </div>

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
        );
    },
};
