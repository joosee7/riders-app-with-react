import { useModalReserved } from "../hooks/useModalReserved"

export const ModalReserved = () => {

    const [riderReserved, setRiderReserved] = useModalReserved();

    const root = document.getElementById('root');

    if ( riderReserved ){

        root.classList.add( 'opacity-25' );

        return (
            <div className="modal fade show d-block" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">No hay Riders para esta hora</h5>
                            <button type="button" className="btn-close" onClick={ () => {
                                setRiderReserved( !riderReserved )
                                root.classList.toggle('opacity-50')
                            } }></button>
                        </div>
                        <div className="modal-body">
                            Lo sentimos, pero alguien acaba de reservar esta hora justo hace unos segundos.
                        </div>
                    </div>
                </div>
            </div>
        )
    } else{
        return null;
    }

}
