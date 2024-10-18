import { FormEvent, useEffect, useState } from "react"
import "./app.css"
import PlayerName from "./components/PlayerName/PlayerName"
import Resource from "./components/Resource/Resource"

function App() {
  const loadResource = (resource: string) => {
    const resourceValue = localStorage.getItem(resource)
    return resourceValue ? parseInt(resourceValue) : 0
  }

  const [Megacredit, setMegacredit] = useState(loadResource("Megacredit"))
  const [MegacreditProduction, setMegacreditProduction] = useState(loadResource("MegacreditProduction"))
  const [Steel, setSteel] = useState(loadResource("Steel"))
  const [SteelProduction, setSteelProduction] = useState(loadResource("SteelProduction"))
  const [Titan, setTitan] = useState(loadResource("Titan"))
  const [TitanProduction, setTitanProduction] = useState(loadResource("TitanProduction"))
  const [Herb, setHerb] = useState(loadResource("Herb"))
  const [HerbProduction, setHerbProduction] = useState(loadResource("HerbProduction"))
  const [Energy, setEnergy] = useState(loadResource("Energy"))
  const [EnergyProduction, setEnergyProduction] = useState(loadResource("EnergyProduction"))
  const [Heat, setHeat] = useState(loadResource("Heat"))
  const [HeatProduction, setHeatProduction] = useState(loadResource("HeatProduction"))

  const handleProduction = (increment: number, production: number, setProduction: (value: number) => void) => {
    setProduction(production + increment)
  }

  const handleIncrement = (
    increment: number,
    resource: number,
    setResource: (value: number) => void
  ) => {
    setResource(resource + increment)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setMegacredit(Megacredit + MegacreditProduction)
    setSteel(Steel + SteelProduction)
    setTitan(Titan + TitanProduction)
    setHerb(Herb + HerbProduction)
    setEnergy(Energy + EnergyProduction)
    setHeat(Heat + HeatProduction)
  }

  useEffect(() => {
    localStorage.setItem("Megacredit", Megacredit.toString())
  }, [Megacredit])

  useEffect(() => {
    localStorage.setItem("MegacreditProduction", MegacreditProduction.toString())
  }, [MegacreditProduction])

  useEffect(() => {
    localStorage.setItem("Steel", Steel.toString())
  }, [Steel])

  useEffect(() => {
    localStorage.setItem("SteelProduction", SteelProduction.toString())
  }, [SteelProduction])

  useEffect(() => {
    localStorage.setItem("Titan", Titan.toString())
  }, [Titan])

  useEffect(() => {
    localStorage.setItem("TitanProduction", TitanProduction.toString())
  }, [TitanProduction])

  useEffect(() => {
    localStorage.setItem("Herb", Herb.toString())
  }, [Herb])

  useEffect(() => {
    localStorage.setItem("HerbProduction", HerbProduction.toString())
  }, [HerbProduction])

  useEffect(() => {
    localStorage.setItem("Energy", Energy.toString())
  }, [Energy])

  useEffect(() => {
    localStorage.setItem("EnergyProduction", EnergyProduction.toString())
  }, [EnergyProduction])

  useEffect(() => {
    localStorage.setItem("Heat", Heat.toString())
  }, [Heat])

  useEffect(() => {
    localStorage.setItem("HeatProduction", HeatProduction.toString())
  }, [HeatProduction])

  return (
    <form onSubmit={handleSubmit} className="container">
      <PlayerName />
      <Resource
        name="Megacredit"
        amount={Megacredit}
        onchange={(increment: number) =>
          handleIncrement(increment, Megacredit, setMegacredit)
        }
        production={MegacreditProduction}
        onchangeProductivity={(increment: number) =>
          handleProduction(increment, MegacreditProduction, setMegacreditProduction)
        }
      />
      <Resource
        name="Steel"
        amount={Steel}
        onchange={(increment: number) =>
          handleIncrement(increment, Steel, setSteel)
        }
        production={SteelProduction}
        onchangeProductivity={(increment: number) =>
          handleProduction(increment, SteelProduction, setSteelProduction)
        }
      />
      <Resource
        name="Titan"
        amount={Titan}
        onchange={(increment: number) =>
          handleIncrement(increment, Titan, setTitan)
        }
        production={TitanProduction}
        onchangeProductivity={(increment: number) =>
          handleProduction(increment, TitanProduction, setTitanProduction)
        }
      />
      <Resource
        name="Herb"
        amount={Herb}
        onchange={(increment: number) =>
          handleIncrement(increment, Herb, setHerb)
        }
        production={HerbProduction}
        onchangeProductivity={(increment: number) =>
          handleProduction(increment, HerbProduction, setHerbProduction)
        }
      />
      <Resource
        name="Energy"
        amount={Energy}
        onchange={(increment: number) =>
          handleIncrement(increment, Energy, setEnergy)
        }
        production={EnergyProduction}
        onchangeProductivity={(increment: number) =>
          handleProduction(increment, EnergyProduction, setEnergyProduction)
        }
      />
      <Resource
        name="Heat"
        amount={Heat}
        onchange={(increment: number) =>
          handleIncrement(increment, Heat, setHeat)
        }
        production={HeatProduction}
        onchangeProductivity={(increment: number) =>
          handleProduction(increment, HeatProduction, setHeatProduction)
        }
      />
      <button type="submit" className="NextRound">
        Next Round
      </button>
    </form>
  )
}

export default App