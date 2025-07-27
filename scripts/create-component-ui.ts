#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { pascalCase } from "../src/lib/utils/pascal-case";

const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Please provide a component name.");
  process.exit(1);
}

const componentDir = path.join(
  __dirname,
  "../src/components/ui",
  componentName,
);
const componentFile = `${componentName}.tsx`;
const styleFile = `${componentName}.css`;

if (fs.existsSync(componentDir)) {
  console.error("❌ Component already exists.");
  process.exit(1);
}

fs.mkdirSync(componentDir);

fs.writeFileSync(
  path.join(componentDir, componentFile),
  `
  import { cn } from "@/lib/utils"

  import "./${styleFile}";

  type T${pascalCase(componentName)}Props = {
    className?: string 
  }

  export function ${pascalCase(componentName)}({ className }: T${pascalCase(componentName)}Props) {
    return (
      <div className={cn("${componentName}", className)}>
        {/* TODO: Implement ${componentName} */}
      </div>
    );
  }
`,
);

fs.writeFileSync(
  path.join(componentDir, styleFile),
  `/* Styles for ${componentName} */
  @reference "tailwindcss";

  .${componentName} {
    @apply relative;
  }
  `,
);

console.log(
  `✅ Created ${componentName} component in components/ui/${componentName}`,
);
