    export class LabelAlignment
    {
    	
		public static readonly DEFAULT_VALUE:number = -1;
		public static readonly LEFT_VALUE:number = 0;
		public static readonly TOP_VALUE:number = 2;
		public static readonly NONE_VALUE:number = 1;
		
		public static DEFAULT:LabelAlignment = new LabelAlignment(-1, "Default", "Default");
		public static LEFT:LabelAlignment = new LabelAlignment(0, "Left", "Left");
		public static TOP:LabelAlignment = new LabelAlignment(2, "Top", "Top");
		public static NONE:LabelAlignment = new LabelAlignment(1, "None", "None");

		private static VALUES_ARRAY:Array<LabelAlignment> = [
			LabelAlignment.DEFAULT, 
			LabelAlignment.LEFT, 
			LabelAlignment.TOP, 
			LabelAlignment.NONE
		];

        public static get_string(literal:string):LabelAlignment
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

        public static getByName(name:string):LabelAlignment
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

        public static get_number(value:number):LabelAlignment
        {
            switch (value)
            {
			case this.DEFAULT_VALUE: return this.DEFAULT;
			case this.LEFT_VALUE: return this.LEFT;
			case this.TOP_VALUE: return this.TOP;
			case this.NONE_VALUE: return this.NONE;
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
