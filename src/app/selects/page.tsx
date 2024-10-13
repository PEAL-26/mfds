"use client";
import {
  Select,
  SelectBadge,
  SelectLabel,
  SelectSearch,
} from "../../../../design-system/components";
import { FaBeer } from 'react-icons/fa';

export default function Selects() {
  return (
    <div className="flex flex-col gap-3 justify-start items-start">
      <Select items={[]} />
      <Select
        selectEmpty
        items={[
          { id: "1", name: "John" },
          { id: "2", name: "Jane" },
        ]}
      />
      <Select
        iconCheck={false}
        fieldLabel="component"
        fieldValue="id"
        items={[
          {
            id: "1",
            component: (
              <div className="flex gap-1 items-center">
                <FaBeer />
                <span>Alguma coisa</span>
              </div>
            ),
          },
          { id: "2", component: "Jane" },
        ]}
      />
      <SelectBadge
        type="default"
        badge="Bade"
        items={[
          { id: "1", name: "John" },
          { id: "2", name: "Jane" },
        ]}
        fieldValue="id"
        fieldLabel="name"
      />
      <SelectBadge
        iconCheck={false}
        placeholder="Select   iconCheck={false}"
        type="default"
        badge="Bade"
        items={[
          { id: "1", name: "John" },
          { id: "2", name: "Jane" },
        ]}
        fieldValue="id"
        fieldLabel="name"
      />
      <SelectLabel type="searchable" label="Label" items={[]} />
      <SelectSearch
        selectEmpty
        items={[
          { id: "1", name: "John" },
          {
            id: "2",
            name: (
              <div className="flex gap-1 items-center">
                <FaBeer />
                <span>Alguma coisa</span>
              </div>
            ),
          },
        ]}
        fieldValue="id"
        fieldLabel="name"
      />
      <SelectSearch
        items={[
          { id: "1", name: "John" },
          {
            id: "2",
            name: (
              <div className="flex gap-1 items-center">
                <FaBeer />
                <span>Alguma coisa</span>
              </div>
            ),
          },
        ]}
        fieldValue="id"
        fieldLabel="name"
      />
      <SelectSearch
        iconCheck={false}
        placeholder="SelectSearch   iconCheck={false}"
        items={[
          { id: "1", name: "John" },
          { id: "2", name: "Jane" },
        ]}
        fieldValue="id"
        fieldLabel="name"
        defaultItem={{ id: "2", name: "Jane" }}
      />
      <SelectSearch
        items={[
          { id: "1", name: "John" },
          { id: "2", name: "Jane 2" },
          { id: "3", name: "Jane 3" },
          { id: "4", name: "Jane 4" },
          { id: "5", name: "Jane 5" },
          { id: "6", name: "Jane 6" },
          { id: "7", name: "Jane 7" },
          { id: "8", name: "Jane 8" },
          { id: "9", name: "Jane ft" },
          { id: "10", name: "Jane angola" },
          { id: "11", name: "Jane luanda" },
          { id: "12", name: "Jane paulo" },
          { id: "13", name: "Jane minga" },
          { id: "14", name: "Jane sei la" },
          { id: "15", name: "Jane bla bla" },
          { id: "16", name: "Jane sss" },
          { id: "17", name: "Jane bbb" },
          { id: "18", name: "Jane ss" },
          { id: "19", name: "Jane aa " },
          { id: "20", name: "Jane q" },
          { id: "21", name: "Jane lglg" },
        ]}
        fieldValue="id"
        fieldLabel="name"
        offlineSearch={true}
      />
      <SelectSearch
        items={[
          { id: "1", name: "John" },
          { id: "2", name: "Jane 2" },
          { id: "3", name: "Jane 3" },
          { id: "4", name: "Jane 4" },
          { id: "5", name: "Jane 5" },
          { id: "6", name: "Jane 6" },
          { id: "7", name: "Jane 7" },
          { id: "8", name: "Jane 8" },
          { id: "9", name: "Jane ft" },
          { id: "10", name: "Jane angola" },
          { id: "11", name: "Jane luanda" },
          { id: "12", name: "Jane paulo" },
          { id: "13", name: "Jane minga" },
          { id: "14", name: "Jane sei la" },
          { id: "15", name: "Jane bla bla" },
          { id: "16", name: "Jane sss" },
          { id: "17", name: "Jane bbb" },
          { id: "18", name: "Jane ss" },
          { id: "19", name: "Jane aa " },
          { id: "20", name: "Jane q" },
          { id: "21", name: "Jane lglg" },
        ]}
        fieldValue="id"
        fieldLabel="name"
        offlineSearch={true}
        defaultItem={{ id: "2", name: "Jane 2" }}
      />
    </div>
  );
}
