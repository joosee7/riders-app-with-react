export const ReserveButton = ({ buttonToChange, clicked, id, riders }) => {

    return (
        <td>
            <button
                id={ 'btn' + id }
                type="button"
                className={ clicked || riders === 0 ? "btn btn-danger" : "btn btn-primary"  }
                onClick={() => {
                    buttonToChange( id )
                }}
                disabled={ riders === 0 && clicked === false ? true : false }
            >
                <img src="./images/reserva.png" alt="Reservar" width="20"/>
            </button>
        </td>
    )
}
