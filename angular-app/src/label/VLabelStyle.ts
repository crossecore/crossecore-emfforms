    export class VLabelStyle
    {
    	
		public static readonly H0_VALUE:number = 0;
		public static readonly H1_VALUE:number = 1;
		public static readonly H2_VALUE:number = 2;
		public static readonly H3_VALUE:number = 3;
		public static readonly H4_VALUE:number = 4;
		public static readonly H5_VALUE:number = 5;
		public static readonly H6_VALUE:number = 6;
		public static readonly H7_VALUE:number = 7;
		public static readonly H8_VALUE:number = 8;
		public static readonly H9_VALUE:number = 9;
		public static readonly SEPARATOR_VALUE:number = 10;
		
		public static H0:VLabelStyle = new VLabelStyle(0, "H0", "H0");
		public static H1:VLabelStyle = new VLabelStyle(1, "H1", "H1");
		public static H2:VLabelStyle = new VLabelStyle(2, "H2", "H2");
		public static H3:VLabelStyle = new VLabelStyle(3, "H3", "H3");
		public static H4:VLabelStyle = new VLabelStyle(4, "H4", "H4");
		public static H5:VLabelStyle = new VLabelStyle(5, "H5", "H5");
		public static H6:VLabelStyle = new VLabelStyle(6, "H6", "H6");
		public static H7:VLabelStyle = new VLabelStyle(7, "H7", "H7");
		public static H8:VLabelStyle = new VLabelStyle(8, "H8", "H8");
		public static H9:VLabelStyle = new VLabelStyle(9, "H9", "H9");
		public static SEPARATOR:VLabelStyle = new VLabelStyle(10, "Separator", "Separator");

		private static VALUES_ARRAY:Array<VLabelStyle> = [
			VLabelStyle.H0, 
			VLabelStyle.H1, 
			VLabelStyle.H2, 
			VLabelStyle.H3, 
			VLabelStyle.H4, 
			VLabelStyle.H5, 
			VLabelStyle.H6, 
			VLabelStyle.H7, 
			VLabelStyle.H8, 
			VLabelStyle.H9, 
			VLabelStyle.SEPARATOR
		];

        public static get_string(literal:string):VLabelStyle
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

        public static getByName(name:string):VLabelStyle
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

        public static get_number(value:number):VLabelStyle
        {
            switch (value)
            {
			case this.H0_VALUE: return this.H0;
			case this.H1_VALUE: return this.H1;
			case this.H2_VALUE: return this.H2;
			case this.H3_VALUE: return this.H3;
			case this.H4_VALUE: return this.H4;
			case this.H5_VALUE: return this.H5;
			case this.H6_VALUE: return this.H6;
			case this.H7_VALUE: return this.H7;
			case this.H8_VALUE: return this.H8;
			case this.H9_VALUE: return this.H9;
			case this.SEPARATOR_VALUE: return this.SEPARATOR;
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
