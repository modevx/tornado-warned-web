import * as d3 from "d3";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import NextImage from "next/image";
import TurfRewind from "@turf/rewind";
import * as topojson from "topojson-client";

import {
  GiBinoculars,
  GiRadarSweep,
  GiGolfTee,
  GiMarbles,
} from "react-icons/gi";
import { FaTornado } from "react-icons/fa6";
import { BiCreditCard } from "react-icons/bi";
import { TbToiletPaper } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoBaseballOutline } from "react-icons/io5";
import { Button, Card, Modal } from "react-daisyui";

import { STATES_MAP } from "constants";
import { changeWfoToCityState, createImpactedAreasMap } from "./_utils";
import { DayJSDateTime, USCountyMap } from "components";
import AlbersTopoJSONMap from "components/_constants/albers-map.topo.json";

const AlertCardSubComponent = ({ children, className, ...props }) => {
  const classes = twMerge("bg-black rounded-lg p-2 text-sm", className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
export const AlertMessageButtons = ({ description, instruction }) => {
  return (
    <>
      {description && instruction ? (
        <div className="flex">
          <AlertMessageModal messageType="Description" message={description} />
          <div className="mx-2"></div>
          <AlertMessageModal messageType="Instruction" message={instruction} />
        </div>
      ) : description ? (
        <AlertMessageModal messageType="Description" message={description} />
      ) : instruction ? (
        <AlertMessageModal messageType="Instruction" message={instruction} />
      ) : null}
    </>
  );
};
export const AlertMessageModal = ({ messageType, message }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleModalOpen = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="font-sans flex-1">
      <Button onClick={toggleModalOpen} className="w-full">
        {messageType}
      </Button>
      <Modal open={isOpen} className="m-10">
        <Modal.Body>
          <pre className="whitespace-break-spaces">{message}</pre>
        </Modal.Body>
        <Modal.Actions>
          <Button
            onClick={toggleModalOpen}
            className="bg-transparent hover:bg-transparent border-none"
          >
            <span className="mr-2">close</span>
            <AiFillCloseCircle
              size={25}
              color="white"
              className="hover:fill-red-500"
            />
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
export const AlertModal = ({ isOpen, closeModalHandler, alertInfo }) => {
  const ALERT_TYPE = {
    "Tornado Warning": TornadoWarningAlert,
    "Severe Thunderstorm Warning": SevereStormWarningAlert,
    "Tornado Watch": TornadoWatchAlert,
    "Severe Thunderstorm Watch": SevereStormWatchAlert,
  };

  const AlertTypeModal = ALERT_TYPE[alertInfo?.properties?.event];

  return (
    <>
      {alertInfo !== null ? (
        <Modal open={isOpen} className="overflow-auto">
          <Button
            size="sm"
            color="ghost"
            shape="circle"
            className="absolute right-2 top-2"
            onClick={closeModalHandler}
          >
            x
          </Button>
          <AlertTypeModal alert={alertInfo} />
        </Modal>
      ) : null}
    </>
  );
};
// ? --- ORIGINAL ALERT TYPE-BASED MODALS
export const TornadoWarningAlert = ({ alert }) => {
  const { id, type, geometry, properties } = alert;
  const alertFeature = { id, type, geometry };
  const {
    areaDesc,
    description,
    effective,
    expires,
    instruction,
    senderName,

    // ! -- ALL PARAMETER VALUES RETURNED IN AN []
    parameters: { maxHailSize, tornadoDetection },
  } = properties;

  return (
    <Card className="bg-gradient-to-br from-red-500 to-red-800 p-2">
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <div className="flex justify-between">
          <TornadoDetection tornadoDetection={tornadoDetection} />
          <div className="mx-2" />
          <ExpirationTime expiresTime={expires} />
        </div>
        {/* <MaxHailSize maxHailSize={maxHailSize} /> */}
        {/* <AlertPolygonMap alertFeature={alert} /> */}
        <ImpactedAreas areaDesc={areaDesc} />
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};
export const TornadoWatchAlert = ({ alert }) => {
  const { properties } = alert;
  const { areaDesc, effective, expires, senderName, description, instruction } =
    properties;

  return (
    <Card className="bg-gradient-to-br from-yellow-300 to-yellow-600 p-2">
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <ExpirationTime expiresTime={expires} />
        <ImpactedAreas areaDesc={areaDesc} />
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};
export const SevereStormWarningAlert = ({ alert }) => {
  const { id, type, geometry, properties } = alert;

  const { areaDesc, effective, expires, senderName, description, instruction } =
    alert?.properties;

  return (
    <Card className="bg-gradient-to-br from-orange-400 to-orange-600 p-2">
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <ExpirationTime expiresTime={expires} />
        <ImpactedAreas areaDesc={areaDesc} />
        {/* <AlertPolygonMap alertFeature={alert} /> */}
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};
export const SevereStormWatchAlert = ({ alert }) => {
  const { properties } = alert;
  const { areaDesc, effective, expires, senderName, description, instruction } =
    properties;

  return (
    <Card className="bg-gradient-to-br from-green-400 to-green-700 p-2">
      <CardTitle>
        <SenderName senderName={senderName} />
      </CardTitle>

      <Body>
        <ExpirationTime expiresTime={expires} />
        <ImpactedAreas areaDesc={areaDesc} />
        {/* <p>{instruction}</p> */}
        <AlertMessageButtons
          description={description}
          instruction={instruction}
        />
      </Body>
    </Card>
  );
};
// ? --- ORIGINAL ALERT TYPE-BASED MODALS
// TODO /////////////////////////////////////
// TODO: optimize polygon rendering
// TODO /////////////////////////////////////
export const AlertPolygonMap = ({ alertFeature }) => {
  const {
    properties: { event },
  } = alertFeature;
  let polygonColor =
    event === "Tornado Warning"
      ? "red"
      : event === "Tornado Watch"
      ? "yellow"
      : event === "Severe Thunderstorm Warning"
      ? "orange"
      : "green";

  // const canvasContext = d3.select("canvas").node().getContext("2d");

  const albersFitExtent = d3.geoAlbers().fitExtent(
    [
      [150, 100],
      [825, 510],
    ],
    alertFeature
  );
  const alberPathGen = d3.geoPath(albersFitExtent);

  return (
    <AlertCardSubComponent>
      <USCountyMap pathGen={alberPathGen}>
        <AlertPolygon
          color={polygonColor}
          feature={alertFeature}
          pathGen={alberPathGen}
          winding={TurfRewind}
        />
      </USCountyMap>
    </AlertCardSubComponent>
  );
};
const AlertCountyLabels = ({ features, pathGen }) => {
  return (
    <g>
      {features.map((feature) => {
        const centroid = pathGen.centroid(feature);
        const {
          id,
          properties: { name },
        } = feature;

        return (
          <g key={`${id}`}>
            <text
              x={centroid[0]}
              y={centroid[1]}
              fontSize="35"
              fill="white"
              textAnchor="middle"
            >
              {name}
            </text>
          </g>
        );
      })}
    </g>
  );
};
const AlertPolygon = ({ feature, color, pathGen, winding }) => {
  return (
    <path
      d={pathGen(winding(feature, { reverse: true }))}
      fill={color}
      stroke={`dark${color}`}
      strokeWidth={10}
      opacity={0.5}
    />
  );
};
export const Body = ({ children }) => {
  const { Body } = Card;

  return <Body className="p-0">{children}</Body>;
};
export const ExpirationTime = ({ expiresTime }) => {
  return (
    <AlertCardSubComponent className="flex flex-wrap items-center justify-between">
      <span className="mr-3">Expires:</span>
      {expiresTime ? (
        <DayJSDateTime utcDate={expiresTime} format="LT" />
      ) : (
        "Unknown"
      )}
    </AlertCardSubComponent>
  );
};
export const ImpactedAreas = ({ areaDesc }) => {
  let impactedAreasMapEntries = null;

  if (areaDesc) {
    const impactedAreasMap = createImpactedAreasMap(areaDesc);
    impactedAreasMapEntries = Array.from(impactedAreasMap.entries());
  }

  return (
    <AlertCardSubComponent className="mb-2">
      {impactedAreasMapEntries
        ? impactedAreasMapEntries.map(([state, areas]) => {
            const joinedAreaDescStr = areas.join(", ");

            return (
              <div key={state}>
                {state ? (
                  <h4 className="text-md font-bold mb-2 uppercase">
                    {STATES_MAP[state]}
                  </h4>
                ) : null}

                <p className="text-sm mb-2">{joinedAreaDescStr}</p>
              </div>
            );
          })
        : "NWS Error: Impacted areas not available at this time..."}
    </AlertCardSubComponent>
  );
};
export const Instruction = ({ instruction }) => {
  return (
    <>
      {instruction ? (
        <AlertCardSubComponent>
          <pre className="whitespace-break-spaces">{instruction}</pre>
        </AlertCardSubComponent>
      ) : null}
    </>
  );
};
export const MaxHailSize = ({ maxHailSize }) => {
  //TODO: check for empty maxHailSize [] or null values
  const maxSizeFloat = maxHailSize[0].split(" ")[2];

  return (
    <AlertCardSubComponent className="flex justify-between items-center">
      <span className="text-sm ">Max Hail Size:</span>
      <span className="ml-3">{`${maxSizeFloat}"`}</span>
    </AlertCardSubComponent>
  );
};
export const SenderName = ({ senderName }) => {
  // const wfo = senderName ?.replace("NWS ", "") ?? "National Weather Service";

  const wfo = senderName
    ? changeWfoToCityState(senderName)
    : "National Weather Service";

  return (
    <AlertCardSubComponent className="flex items-center text-lg">
      <NextImage src="/images/logo-nws.png" height={40} width={40} />
      <span className="ml-3">{wfo}</span>
    </AlertCardSubComponent>
  );
};
export const CardTitle = ({ children }) => {
  const { Title } = Card;

  return (
    <AlertCardSubComponent className="mb-2 flex justify-between">
      <Title>{children}</Title>
    </AlertCardSubComponent>
  );
};
export const TornadoDetection = ({ tornadoDetection }) => {
  const isValidProp = tornadoDetection && tornadoDetection.length > 0;

  return (
    <AlertCardSubComponent className="flex items-center">
      <FaTornado size={30} />
      <span className="text-sm font-bold ml-4">
        {isValidProp ? tornadoDetection[0] : "N/A"}
      </span>
    </AlertCardSubComponent>
  );
};