export default {
    render() {
        return (
            <section class="hero is-primary is-bold is-fullheight">
                <div class="hero-head"></div>
                <div class="hero-body">
                    <div class="container" id="container">
                        <h1 class="title">App task example v2</h1>
                        <h2 class="subtitle">
                            App task is simple example of app created with
                            Vuejs.
                        </h2>
                        <b-icon pack="fas" icon="user"></b-icon>
                    </div>
                </div>
                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active">
                                    <a>Desenvolvido</a>
                                </li>
                                <li>
                                    <a>por</a>
                                </li>
                                <li>
                                    <a>xD</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        );
    },
};
