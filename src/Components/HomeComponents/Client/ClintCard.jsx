



export const ClientCard = ({index}) => {
    return(
        <div className="single-client">
        <div className="client-image">
          <a href="#">
            <img src={`img/client/${index}.png`} alt="" className="s-img" />
            {/* <img src={`img/client/${index}-hover.png`} alt="" className="s-img" /> */}
          </a>
        </div>
      </div>
    )
}