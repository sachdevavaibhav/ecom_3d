import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import state from "../store";
import { easing } from "maath";

const CameraRig = ({children}) => {
    return (
        <group>
            {children}
        </group>
    )
};

export default CameraRig;