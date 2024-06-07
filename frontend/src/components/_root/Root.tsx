import Card from "../card/Card"
import Card1 from "../card/Card1"
import Card2 from "../card/Card2"
import Nav from "../nav/nav"

const Root = () => {

    return (
        <div>
            <Nav />

            <div className="flex flex-wrap justify-center">
                <Card />
                <Card1 />
                <Card2 />
            </div>
        </div>
    )
}

export default Root