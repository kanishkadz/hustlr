import React from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { Button } from './ui/button'
import { Input } from './ui/input'

const ApplyJobDrawer = ({ user, job, applied = false, fetchJob }) => {
    return (
        <div>
            <Drawer open={applied ? false : undefined}>
                <DrawerTrigger asChild> 
                    <Button size="lg" variant={job?.isOpen && !applied ? "blue" : "destructive"} disabled={!job?.isOpen || applied}>
                        {job?.isOpen ? (applied ? "Applied" : "Apply") : "Hiring Closed"}
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Apply for {job?.title} at {job?.company?.name}</DrawerTitle>
                        <DrawerDescription>Please fill the form below.</DrawerDescription>
                    </DrawerHeader>

                    <form className="flex flex-col gap-4 p-4 pb-0">
                        <Input type="number" placeholder="Years of Experience" className="flex-1" />
                        <Input type="text" placeholder="Skills (Comma Seperated)" className="flex-1" />
                    </form>

                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </div>
    )
}

export default ApplyJobDrawer