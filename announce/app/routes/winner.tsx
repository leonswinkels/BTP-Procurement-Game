import { Outlet } from "@remix-run/react";

export default function Winner(){

    return (
        <div>
          <h3>And the winner is...</h3>
          <main>
            <Outlet />
          </main>
        </div>
      );

}