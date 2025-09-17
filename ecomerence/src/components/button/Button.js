import Styles from '../../components/button/button.module.css'
export default function Button(props ) {
          
    return (
 
        <button className={`${Styles.btn} ${props?.className}`} style={{backgroundColor: `${props?.BgColor}`, padding: `${props?.padding}`, color: `${props?.textColor}`, margin: `${props?.margin}`} } onClick={props?.onClick}  >
            {props?.label}
        </button>
    );
}