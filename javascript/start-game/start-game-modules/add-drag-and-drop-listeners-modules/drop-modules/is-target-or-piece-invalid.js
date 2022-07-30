export default function isTargetOrPieceInvalid(target, dragElement) {
    if(target === null || target === undefined) {
        return true;
    }

    if(dragElement === null || dragElement === undefined) {
        return true;
    }

    return false;
}