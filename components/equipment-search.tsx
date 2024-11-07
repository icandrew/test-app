'use client'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { ToggleSelection } from "@/components/toggle-selection"

const locations = [
  { value: "london", label: "London" },
  { value: "manchester", label: "Manchester" },
  { value: "birmingham", label: "Birmingham" },
  { value: "leeds", label: "Leeds" },
  { value: "liverpool", label: "Liverpool" },
]

const deliveryOptions = [
  { value: "pickup", label: "Self Pickup" },
  { value: "standard", label: "Standard Delivery" },
  { value: "express", label: "Express Delivery" },
  { value: "next-day", label: "Next Day Delivery" },
]

export function EquipmentSearch() {
  const [searchType, setSearchType] = useState<"buy" | "hire">("hire")
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedDelivery, setSelectedDelivery] = useState("")

  return (
    <div className="bg-gray-50 -mx-4 md:-mx-6 lg:-mx-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
        <div className="py-8 md:py-10 lg:py-12">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
                <div className="w-full md:w-[200px] lg:w-[200px] shrink-0">
                  <ToggleSelection value={searchType} onChange={setSearchType} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:flex lg:flex-1 gap-3 md:gap-4 lg:gap-6">
                  {/* Location */}
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Location
                    </label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location.value} value={location.value}>
                            {location.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Delivery */}
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Delivery
                    </label>
                    <Select value={selectedDelivery} onValueChange={setSelectedDelivery}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select delivery" />
                      </SelectTrigger>
                      <SelectContent>
                        {deliveryOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Start Date */}
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Start Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          {startDate ? startDate.toLocaleDateString() : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* End Date */}
                  <div className="flex flex-col w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      End Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          {endDate ? endDate.toLocaleDateString() : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}