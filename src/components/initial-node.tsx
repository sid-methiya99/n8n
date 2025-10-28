"use client";

import { NodeProps } from "@xyflow/react";
import { memo, useState } from "react";
import { PlaceholderNode } from "./react-flow/placeholder-node";
import { PlusIcon } from "lucide-react";
import { WorkflowNode } from "./workflow-node";
import { NodeSelector } from "./node-selector";

export const InitialNode = memo((props: NodeProps) => {
  const [selectorOpen, setselectorOpen] = useState(false);
  return (
    <NodeSelector open={selectorOpen} onOpenChange={setselectorOpen}>
      <WorkflowNode>
        <PlaceholderNode {...props} onClick={() => setselectorOpen(true)}>
          <div className="cursor-pointer flex items-center justify-center">
            <PlusIcon className="size-4" />
          </div>
        </PlaceholderNode>
      </WorkflowNode>
    </NodeSelector>
  );
});

InitialNode.displayName = "InitialNode";
