import Modal from './modal';

export default {
    props: {
        list: { type: Array, default: () => [] },
        title: { Type: String, required: true, default: () => 'Block Title' },
        subTitle: {
            Type: String,
            required: true,
            default: () => 'This is subtitle, short',
        },
        isTodo: { Type: Boolean, default: () => false },
        keyBlock: { Type: Number, required: true },
        labelTooltip: { Type: String, default: () => 'This label tooltip..' },
    },

    data() {
        return {
            visibleModal: false,
            ref: undefined,
            selected: false,
        };
    },

    beforeMount() {
        if (this.list.length) {
            this.ref = `list${this.list[0].list}`;
        }
    },

    updated() {
        if (this.selected && this.list.length) {
            this.$refs.list1.firstChild.classList.remove(
                'has-background-primary'
            );
        }
    },

    methods: {
        dragOver(event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        },

        onDrop(event) {
            let iten = event.dataTransfer.getData('task');
            let dropped = Object.assign({}, JSON.parse(iten), {
                currentBlock: this.keyBlock,
            });
            this.$emit('dropItem', dropped);
            event.dataTransfer.clearData();
        },

        dragLeave(event) {
            event.target.classList.remove('has-background-primary');
        },

        dragStart(event, target) {
            event.target.classList.add('has-background-primary');
            let taskDrag = JSON.stringify({
                id: target.id,
                list: this.ref,
            });
            this.selected = true;
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('task', taskDrag);
        },

        handleDetele(data) {
            if (!data) return;
            this.$buefy.dialog.confirm({
                title: 'Deleting task',
                message:
                    'Are you sure you want to <b>delete</b> your task? This action cannot be undone.',
                confirmText: 'Delete Account',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: () => this.$emit('delete', data),
            });
        },
    },

    render() {
        return (
            <article class="tile is-child box ">
                <p class="title has-text-black">{this.title}</p>
                <div class="level">
                    <div class="level-left">
                        <p class="subtitle has-text-black">{this.subTitle}</p>
                    </div>
                    <div class="level-right">
                        {this.isTodo ? (
                            <b-button
                                icon-left="plus-circle"
                                type="is-success"
                                onClick={() =>
                                    (this.visibleModal = !this.visibleModal)
                                }
                            >
                                Add
                            </b-button>
                        ) : (
                            <b-tooltip
                                label={this.labelTooltip}
                                position="is-top"
                                animated
                            >
                                <b-icon icon="question-circle"></b-icon>
                            </b-tooltip>
                        )}
                    </div>
                </div>
                <div
                    class="content"
                    style={`min-height: 150px; ${
                        !this.list.length
                            ? 'border:solid 1px #c3c3c3; border-radius: 5px; cursor: pointer;'
                            : ''
                    }`}
                    onDragover={(e) => this.dragOver(e)}
                    onDrop={(e) => this.onDrop(e)}
                    onDragend={this.dragLeave}
                >
                    {!this.list.length ? (
                        <div slot="empty">
                            <section class="section">
                                <div class="content has-text-grey has-text-centered">
                                    <p>
                                        <b-icon
                                            icon="frown"
                                            size="is-large"
                                        ></b-icon>
                                    </p>
                                    <p>Drag something here.</p>
                                </div>
                            </section>
                        </div>
                    ) : (
                        <ul
                            style="list-style-type: none; margin: 0;"
                            ref={this.ref}
                        >
                            {this.list.map((todo, index) => {
                                return (
                                    <li
                                        key={index}
                                        class="box"
                                        style={{
                                            padding: '0.7em',
                                            border: 'solid 1px #c3c3c3',
                                        }}
                                        draggable={true}
                                        onDragstart={(e) =>
                                            this.dragStart(e, todo)
                                        }
                                        // onDragleave={this.dragLeave}
                                    >
                                        <article
                                            class="media"
                                            style={{ height: '20px' }}
                                        >
                                            <div class="media-left">
                                                <b-icon
                                                    style={{
                                                        marginTop: '2px',
                                                    }}
                                                    class="has-text-link"
                                                    icon={
                                                        todo.list === 1
                                                            ? 'clock'
                                                            : 'spinner'
                                                    }
                                                    size="is-small"
                                                ></b-icon>
                                            </div>
                                            <div
                                                class="media-content"
                                                style={{
                                                    lineHeight: '10px',
                                                }}
                                            >
                                                <div class="content">
                                                    <span class="title is-6 has-text-dark">
                                                        {todo.desc}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="media-rigth">
                                                <div
                                                    onClick={() =>
                                                        this.handleDetele(todo)
                                                    }
                                                >
                                                    <b-icon
                                                        style={{
                                                            marginTop: '2px',
                                                        }}
                                                        class="has-text-danger"
                                                        icon={
                                                            todo.list === 1
                                                                ? 'trash-alt'
                                                                : 'clipboard-check'
                                                        }
                                                        size="is-small"
                                                    />
                                                </div>
                                            </div>
                                        </article>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
                <Modal
                    visible={this.visibleModal}
                    onVisibleChange={(value) => (this.visibleModal = value)}
                    onSubmit={(data) => this.$emit('submit', data)}
                />
            </article>
        );
    },
};
