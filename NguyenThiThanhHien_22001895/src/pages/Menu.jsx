import MenuList from "../component/MenuList";

function Menu(){
    return(
        <div>
            <h1>Thuc down</h1>
            <MenuList menu={this.props.menu}/>
        </div>
    )
}
export default Menu;