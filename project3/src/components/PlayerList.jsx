const PlayerList = (props) => {
    console.log(props)
    return (
        props.puppyList.map((player) => {
            // console.log(puppyList)
            return (
                <div>
                    <li key={player.name}>{player.name}</li>
                </div>
            )
        })
    )
}

export default PlayerList