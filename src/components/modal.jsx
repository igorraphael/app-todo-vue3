export default {
    props: {
        visible: { type: Boolean },
    },

    data() {
        return {
            hover: false,
            description: undefined,
        };
    },

    computed: {
        modalVisible() {
            return this.visible ? 'is-active' : '';
        },

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
        handleCloseModal(is) {
            this.$emit('visibleChange', is);
        },

        handleMouseHover() {
            this.hover = !this.hover;
        },

        handleSubmit() {
            if (!this.description || this.description.length < 6) {
                const notif = this.$buefy.notification.open({
                    message: `Please, enter the description..`,
                    position: 'is-bottom-right',
                    type: 'is-danger',
                    hasIcon: true,
                });
                return;
            }
            this.$emit('submit', this.description);
            this.$nextTick(() => {
                this.description = undefined;
                this.handleCloseModal(false);
            });
        },
    },

    render() {
        return (
            <div>
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
                                                this.hover
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
                                            onClick={() =>
                                                this.handleCloseModal(false)
                                            }
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
            </div>
        );
    },
};
