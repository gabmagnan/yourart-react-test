import jsonZero from './data/0.json';
import jsonOne from './data/1.json';
import noPageStyles from "./styles/noPage.module.css";

export function displayStringArray (stringArray) {

    let stringList = '';

    stringArray.forEach((element, index) => {
        stringList = stringList + element;
        if (index === stringArray.length) {
            stringList = stringList + ', ';
        }
    });

    return stringList;
}

export function getJsonData (value) {
    if (value === '0') {
        return jsonZero
    } else if (value === '1') {
        return jsonOne
    } else {
        return 'error';
    }
}

export function NotFoundPage () {
    return (
        <h1 className={noPageStyles.notFoundTitle}>
            404 Page Not found
        </h1>
    )
}
