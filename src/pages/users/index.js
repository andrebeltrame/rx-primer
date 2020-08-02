import React, { useState } from "react";
import Card from '../../components/ui/Card'
import ListUsers from '../../components/Users'
 
export const PageUsers = () => {

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