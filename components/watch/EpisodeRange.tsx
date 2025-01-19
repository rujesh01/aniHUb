"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"

// Function to generate episode ranges dynamically
const generateEpisodeRanges = (totalEpisodes: number) => {
    const ranges = [];
    for (let i = 0; i < totalEpisodes; i += 100) {
        ranges.push({
            start: i + 1,
            end: Math.min(i + 100, totalEpisodes),
            label: `EPS. ${i + 1}-${Math.min(i + 100, totalEpisodes)}`
        });
    }
    return ranges;
}

interface Episode {
    number: number
    status: "active" | "inactive" | "watching" | "selected"
}

interface EpisodeRange {
    start: number
    end: number
    label: string
}

export default function EpisodesTable() {
    const totalEpisodes = 1220;  // Example: you can dynamically change this
    const EPISODE_RANGES = generateEpisodeRanges(totalEpisodes);

    const [searchQuery, setSearchQuery] = React.useState("")
    const [selectedEpisode, setSelectedEpisode] = React.useState<number | null>(null)
    const [watchingEpisode, setWatchingEpisode] = React.useState(5) // Currently watching episode 5
    const [hoveredEpisode, setHoveredEpisode] = React.useState<number | null>(null)
    const [currentRange, setCurrentRange] = React.useState(EPISODE_RANGES[0])

    // Generate all episodes data (1-200)
    const allEpisodes: Episode[] = React.useMemo(() => {
        return Array.from({ length: totalEpisodes }, (_, i) => ({
            number: i + 1,
            status: (i + 1) === watchingEpisode ? "watching" :
                (i + 1) === selectedEpisode ? "selected" :
                    (i + 1) < 11 ? "active" :
                        "inactive"
        }))
    }, [watchingEpisode, selectedEpisode, totalEpisodes])

    // Filter episodes based on search query and current range
    const filteredEpisodes = allEpisodes.filter(episode =>
        episode.number.toString().includes(searchQuery) &&
        episode.number >= currentRange.start &&
        episode.number <= currentRange.end
    )

    // Calculate grid for episodes (5 columns)
    const rows = Math.ceil(filteredEpisodes.length / 5)
    const grid = Array.from({ length: rows }, (_, i) =>
        filteredEpisodes.slice(i * 5, (i + 1) * 5)
    )

    const handleRangeChange = (range: EpisodeRange) => {
        setCurrentRange(range)
    }

    return (
        <div className="space-y-4 rounded-md border border-gray-800 bg-gray-950 p-4">
            <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-200">List of episodes:</div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-[125px] bg-gray-900 border-gray-800 text-gray-200">
                            {currentRange.label} <ChevronDown className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[110px] bg-gray-900 border-gray-800">
                        {EPISODE_RANGES.map((range) => (
                            <DropdownMenuItem
                                key={range.label}
                                onSelect={() => handleRangeChange(range)}
                                className="text-gray-200 focus:bg-gray-800 focus:text-pink-500"
                            >
                                {range.label}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Input
                placeholder="Number of Ep"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-900 border-gray-800 text-gray-200 placeholder:text-gray-500"
            />
            <ScrollArea className="h-[40rem]">
            <div className="grid grid-cols-5 gap-1 overflow-hidden">
                {grid.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        {row.map((episode) => (
                            <button
                                key={episode.number}
                                onClick={() => setSelectedEpisode(episode.number)}
                                onMouseEnter={() => setHoveredEpisode(episode.number)}
                                onMouseLeave={() => setHoveredEpisode(null)}
                                className={cn(
                                    "h-8 w-full rounded text-sm font-medium transition-colors",
                                    episode.status === "watching" && "bg-pink-500 text-white",
                                    episode.status === "selected" && "bg-green-700 text-white",
                                    episode.status === "active" && "bg-gray-700 text-white hover:bg-gray-600",
                                    episode.status === "inactive" && "bg-gray-800 text-gray-400",
                                    hoveredEpisode === episode.number && "text-pink-500"
                                )}
                            >
                                {episode.number}
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            </ScrollArea>
            </div>  
    )
}
