'use client'

import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Link} from "@nextui-org/react";
import Container from "@/components/shared/container";


export default function OrdersPage() {
  return (
    <Container>
      <div className="flex justify-center items-center mt-14 px-10 sm:px-10">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>NOMBRE</TableColumn>
          <TableColumn>ESTADO</TableColumn>
          <TableColumn>OPERACIONES</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell><Link href="/shop/orders/1">Ver orden</Link></TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell><Link href="/shop/orders/#">Ver orden</Link></TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell><Link href="/shop/orders/#">Ver orden</Link></TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell><Link href="/shop/orders/2">Ver orden</Link></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    </Container>
  );
}


// PANEL DE ORDENES DEL COMPRADOR, TODOS LOS DATOS DEBEN ESTAR EN UNA MISMA BASE DE DATOS Y ENLAZADOS.
