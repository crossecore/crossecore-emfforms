    export class DateTimeDisplayType
    {
    	
		public static readonly TIMEANDDATE_VALUE:number = 0;
		public static readonly TIMEONLY_VALUE:number = 1;
		public static readonly DATEONLY_VALUE:number = 2;
		
		public static TIMEANDDATE:DateTimeDisplayType = new DateTimeDisplayType(0, "TimeAndDate", "TimeAndDate");
		public static TIMEONLY:DateTimeDisplayType = new DateTimeDisplayType(1, "TimeOnly", "TimeOnly");
		public static DATEONLY:DateTimeDisplayType = new DateTimeDisplayType(2, "DateOnly", "DateOnly");

		private static VALUES_ARRAY:Array<DateTimeDisplayType> = [
			DateTimeDisplayType.TIMEANDDATE, 
			DateTimeDisplayType.TIMEONLY, 
			DateTimeDisplayType.DATEONLY
		];

        public static get_string(literal:string):DateTimeDisplayType
        {
            for (let i = 0; i < this.VALUES_ARRAY.length; i++)
            {
                let result = this.VALUES_ARRAY[i];
                if (result.toString() === literal)
                {
                    return result;
                }
            }
            return null;
        }

        public static getByName(name:string):DateTimeDisplayType
        {
	        for (let i = 0; i < this.VALUES_ARRAY.length; i++)
	        {
	            let result = this.VALUES_ARRAY[i];
	            if (result.getName()==name)
	            {
	                return result;
	            }
	        }
	        return null;
        }

        public static get_number(value:number):DateTimeDisplayType
        {
            switch (value)
            {
			case this.TIMEANDDATE_VALUE: return this.TIMEANDDATE;
			case this.TIMEONLY_VALUE: return this.TIMEONLY;
			case this.DATEONLY_VALUE: return this.DATEONLY;
            }
            return null;
        }

	    private value:number;
	    private name:string;
	    private literal:string;

	    private constructor(value:number, name:string, literal:string)
	    {
	        this.value = value;
	        this.name = name;
	        this.literal = literal;
	    }
	
	    public getLiteral():string
	    {
	        return this.literal;
	    }
	
	    public getName():string
	    {
	        return this.name;
	    }
	
	    public getValue():number
	    {
	        return this.value;
	    }
	    
	    public toString():string
	    {
	        return this.literal;
	    }
    }
