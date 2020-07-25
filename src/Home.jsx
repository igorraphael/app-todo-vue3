export default {
    render() {
        return (
            <section class="hero is-primary is-bold is-fullheight">
                <div class="hero-body">
                    <div class="container">
                        <router-view />
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
                                    <a>Igor Raphael</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        );
    },
};
