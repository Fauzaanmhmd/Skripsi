import React from 'react';
// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
// styles for buttons on sweetalert
import styles from "assets/jss/nextjs-material-dashboard-pro/views/sweetAlertStyle.js";

const useStyles = makeStyles(styles);

const sweetAlertStyle = { display: "block", marginTop: "-100px" }

export default function SweetAlertDemo() {
    const classes = useStyles();
    const [alert, setAlert] = React.useState(null);
    const hideAlert = () => {
        setAlert(null);
    }
    const successAlert = () => {
        setAlert(
            <SweetAlert
                success
                style={sweetAlertStyle}
                title="Good job!"
                onConfirm={() => this.hideAlert()}
                onCancel={() => this.hideAlert()}
                confirmBtnCssClass={
                    classes.button + " " + classes.success
                }
            >
                You clicked the button!
      </SweetAlert>
        );
    }
    return (
        <product>
            <div>
                {this.state.alert}
                <Button color="rose" onClick={this.successAlert.bind(this)}>
                    Try me!
      </Button>
            </div>
        </product>
    );
}