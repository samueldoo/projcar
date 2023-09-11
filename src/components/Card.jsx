
const Card = ({description, position, company, name, image}) => {
    return (
        <div className="w-fit border-2 border-slate-900 flex flex-col items-center justify-center">
            <div>
                <p className="text-2xl">{description}</p>
            </div>
            <div>
                <div>
                    <img />
                </div>
                <div className="flex flex-col">
                    <div>
                        {name}
                    </div>
                    <div>{image}</div>
                </div>
            </div>
        </div>
    )
}
export default Card