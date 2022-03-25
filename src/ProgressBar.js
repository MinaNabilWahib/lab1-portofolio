function PrograssBar(props) {
    return (
        <>
            <div className="progress">
                <div className="progress-bar" style={{ width: props.w }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    )
}

export default PrograssBar;