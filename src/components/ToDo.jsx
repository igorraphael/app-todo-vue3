export default {
    props: {
        list: { type: Array, default: null },
    },

    data() {
        return {
            modalVisible: undefined,
            todos: this.list,
            hover: false,
            description: undefined,
            sub: false,
        };
    },

    computed: {
        hasError() {
            return this.description &&
                this.description.length > 1 &&
                this.description.length < 6
                ? 'is-danger'
                : '';
        },

        messageError() {
            return this.description &&
                this.description.length > 1 &&
                this.description.length < 6
                ? 'Description must have at least 5 characters'
                : '';
        },
    },

    methods: {
        handleModal() {
            this.modalVisible = this.modalVisible ? '' : 'is-active';
            this.description = undefined;
        },

        handleMouseHover() {
            this.hover = !this.hover;
        },

        danger() {
            const notif = this.$buefy.notification.open({
                message: `Please, enter the description..`,
                position: 'is-bottom-right',
                type: 'is-danger',
                hasIcon: true,
            });
        },

        handleSubmit() {
            if (!this.description || this.description.length < 6) {
                this.danger();
                return;
            }
            this.$emit('changes', this.description);
            this.handleModal();
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
                        <section class="">
                            <div class="box" style={{ width: '500px' }}>
                                <div class="level">
                                    <div class="level-left">
                                        <p class="modal-card-title has-text-centered">
                                            Add new task
                                        </p>
                                    </div>
                                    <div class="level-right">
                                        <button
                                            style={
                                                this.hover === true
                                                    ? 'background-color: #7957d5'
                                                    : 'background-color: #ab8efa'
                                            }
                                            onMouseover={() =>
                                                this.handleMouseHover()
                                            }
                                            onMouseleave={() =>
                                                this.handleMouseHover()
                                            }
                                            class="delete"
                                            aria-label="close"
                                            onClick={() => this.handleModal()}
                                        ></button>
                                    </div>
                                </div>
                                <article class="media">
                                    <div class="media-content">
                                        <div
                                            class="content"
                                            style={{ marginTop: '1em' }}
                                        >
                                            <b-field
                                                message={this.messageError}
                                                type={this.hasError}
                                                label="Description"
                                                label-position="on-border"
                                                custom-class="has-text-primary"
                                            >
                                                <b-input
                                                    placeholder="Ex: Make a coffe"
                                                    v-model={this.description}
                                                ></b-input>
                                            </b-field>
                                        </div>
                                        <div class="has-text-centered">
                                            <b-button
                                                icon-left="save"
                                                type="is-success"
                                                onClick={() =>
                                                    this.handleSubmit()
                                                }
                                            >
                                                Save
                                            </b-button>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </section>
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
