import { Button } from '@/components/ui/button';
import { DatePickerWithPresets } from '@/components/ui/datePickerWithPreset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useAppSelector } from '@/redux/hook';
import { IProduct } from '@/types/globalTypes';

import { useState } from 'react';

export default function Checkout() {
  const [scheduled, setScheduled] = useState<boolean>(false);

  const { products } = useAppSelector((state) => state.cart);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Delivery Information</h1>
        <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="name">Email</Label>
                <Input type="text" id="name" className="mt-2" />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="name">Phone</Label>
                <Input type="text" id="name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="name">City</Label>
                <Input type="text" id="name" className="mt-2" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="name">Address</Label>
            <Textarea id="name" className="mt-2" />
          </div>
          <div className="flex items-center gap-2 mt-5">
            <Label className="text-lg">Scheduled Delivery</Label>
            <Switch onClick={() => setScheduled(!scheduled)} />
          </div>
          <div className="flex gap-5 mt-5">
            <div className="w-full">
              <Label htmlFor="note">Note</Label>
              <Input
                disabled={!scheduled}
                type="text"
                id="note"
                className="mt-3"
              />
            </div>
            <div className="w-full flex flex-col mt-2">
              <Label className="mb-3" htmlFor="name">
                Date
              </Label>
              <DatePickerWithPresets disabled={!scheduled} />
            </div>
          </div>
          <div className="mt-3">
            <Label className="text-lg">Payment method</Label>
            <div className="flex gap-5 mt-5">
              <RadioGroup defaultValue="comfortable" className="flex">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="online"
                    id="r1"
                    className="border border-gray-400"
                  />
                  <Label htmlFor="r1">Online payment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="cash"
                    id="r2"
                    className="border border-gray-400"
                  />
                  <Label htmlFor="r2">Cash on delivery</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
