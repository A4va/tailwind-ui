import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Flex from "@/components/Container/Grid";
import Icon from "@/components/Icon/Index";
import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-[full] flex-col bg-slate-200">
      <SideNav>
        <div className="flex flex-col flex-1 w-full gap-4">
          <h1 className="font-bold text-6xl mb-10 text-center">
            Better reusable UI components
          </h1>
          <div className="flex flex-col gap-10 w-full">
            <div className="flex w-full gap-4 items-center">
              <Button size="large" variant="primary">
                button label
              </Button>
              <Button size="medium" variant="primary" disabled>
                button label
              </Button>
              <Button size="small" variant="primary">
                button label
              </Button>
            </div>
            <div className="flex w-full gap-4 items-center">
              <Button size="large" variant="secondary">
                button label
              </Button>
              <Button size="medium" variant="secondary" disabled>
                button label
              </Button>
              <Button size="small" variant="secondary">
                button label
              </Button>
            </div>
            <div className="flex w-full gap-4 items-center">
              <Button size="large" variant="transparent">
                button label
              </Button>
              <Button size="medium" variant="transparent" disabled>
                button label
              </Button>
              <Button size="small" variant="transparent">
                button label
              </Button>
            </div>
          </div>
        </div>
        <Flex>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>
          <Card  heading="Card" icon="export-pdf">
            45.42K
            {/* <Badge>
              <Icon size={20} name={"home"} className="me-2" />
              4.52K
            </Badge> */}
          </Card>

        </Flex>
      </SideNav>
    </main>
  );
}
