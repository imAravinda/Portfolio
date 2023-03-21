import { Puff } from 'react-loader-spinner';
import * as l from './SpinnerElements';
const Spinner = () => {
    return ( 
        <l.Container>
            <Puff
                height={200}
                width={200}
                radius={1}
                color="#50C878"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </l.Container>
     );
}
 
export default Spinner;