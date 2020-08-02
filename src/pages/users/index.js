import React, { useState } from "react";
import Card from '../../components/ui/Card'
import ListUsers from '../../components/Users'
import { Overlay } from "react-portal-overlay";

export const PageUsers = () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Card className="no-border">
          <h2>Usuários</h2>
          <ListUsers />
        </Card>
      </>
    );
}
export default PageUsers