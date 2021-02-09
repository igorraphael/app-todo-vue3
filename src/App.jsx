import './index.css'

//https://www.behance.net/gallery/107935847/Todo-List-Desktop-Mobile-app-UI-Design?tracking_source=search_projects_recommended%7Cto%20do%20app
//UI Idea


export default {

    render() {

        const slots = {

            header: () => (
                <div class="card-header">
                    <span>Card header</span>
                </div>
            )
        };

        return (
            <div id="todo-app">

                <h1>To do app</h1>
                <el-main>
                    <el-card class="card-box" v-slots={slots}>
                        Card
                    </el-card>
                </el-main>
            </div>
        )
    }
}