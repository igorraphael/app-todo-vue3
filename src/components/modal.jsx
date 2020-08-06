export default {
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
            </div>
        );
    },
};
