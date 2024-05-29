"use client";
import { Table } from "../../../../design-system/components";

export default function Tables() {
  return (
    <div className="flex flex-col gap-3 justify-start items-start">
      <Table.Root>
        <Table.Head>
          <Table.HeaderCell title="Nome" />
          <Table.HeaderCell title="Categoria" />
          <Table.HeaderCell title="Preço" />
          <Table.HeaderCell className="w-32" title="Estado" />
          <Table.HeaderCell className="w-20" />
        </Table.Head>
        <Table.Body>
          {/* Loading */}
          <Table.Loading isLoading={true} />
        </Table.Body>

        <Table.Foot>
          <Table.Row formatting="none">
            <Table.Cell autoColSpan>
              <div className="flex justify-end">
                <Table.Pagination />
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table.Root>
    </div>
  );
}
